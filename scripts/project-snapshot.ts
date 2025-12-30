import "dotenv/config";

import { PrismaClient } from "../src/prisma-generated";
import { chromium } from "playwright";

type Args = {
  slug?: string;
  help?: boolean;
};

function parseArgs(argv: string[]): Args {
  const args: Args = {};

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === "--help" || token === "-h") {
      args.help = true;
      continue;
    }

    if (token === "--slug" || token === "-s") {
      const value = argv[i + 1];
      if (!value || value.startsWith("-")) {
        throw new Error("Você precisa informar um valor para --slug/-s.");
      }
      args.slug = value;
      i += 1;
      continue;
    }

    throw new Error(`Argumento desconhecido: ${token}`);
  }

  return args;
}

function printHelp() {
  // eslint-disable-next-line no-console
  console.log(`\nUso:\n  npm run project:snapshot\n  npm run project:snapshot -- --slug <slug>\n\nOpções:\n  --slug, -s   Processa apenas o projeto com este slug\n  --help, -h   Mostra esta ajuda\n`);
}

async function captureSnapshotAsDataUrl(link: string): Promise<string> {
  const browser = await chromium.launch({ headless: true });

  try {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 720 },
      deviceScaleFactor: 2,
    });

    const page = await context.newPage();

    await page.goto(link, {
      waitUntil: "load",
      timeout: 60_000,
    });

    // Pequeno delay para dar tempo de fontes/animações assentarem.
    await page.waitForTimeout(1500);

    const png = await page.screenshot({ type: "png", fullPage: false });
    return `data:image/png;base64,${png.toString("base64")}`;
  } finally {
    await browser.close();
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }

  const prisma = new PrismaClient();

  try {
    const projects = await prisma.project.findMany({
      where: args.slug ? { slug: args.slug } : undefined,
      select: { id: true, slug: true, title: true, link: true },
      orderBy: { createdAt: "asc" },
    });

    if (args.slug && projects.length === 0) {
      throw new Error(`Projeto não encontrado para o slug: ${args.slug}`);
    }

    // eslint-disable-next-line no-console
    console.log(
      `Gerando snapshot${args.slug ? ` para \"${args.slug}\"` : " para todos os projetos"}...`,
    );

    for (const project of projects) {
      // eslint-disable-next-line no-console
      console.log(`- ${project.slug}: ${project.link}`);

      const image = await captureSnapshotAsDataUrl(project.link);

      await prisma.project.update({
        where: { id: project.id },
        data: { image },
      });
    }

    // eslint-disable-next-line no-console
    console.log("Snapshot(s) gerado(s) e salvo(s) com sucesso.");
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err instanceof Error ? err.message : err);
  process.exitCode = 1;
});
