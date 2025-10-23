import { Icon } from "@iconify/react";

export default function AboutSection() {
    return (
        <section className="h-[calc(100vh-80px)] flex">
            <div className="flex-1 flex justify-center items-center">
                <div>
                    <span className="text-2xl">Eu sou</span>
                    <div className="text-8xl">
                        <span>Rychard</span>
                        <span>Antony</span>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-10">
                    <div className="bg-red-100 h-[500px] w-[400px] rounded-full">
                        {/* Imagem */}

                    </div>
                    <div>
                        <ul className="flex gap-10">
                            <li><Icon icon="mdi:linkedin" width={45} height={45} /></li>
                            <li><Icon icon="mdi:gmail" width={45} height={45} /></li>
                            <li><Icon icon="mdi:github" width={45} height={45} /></li>
                            <li><Icon icon="mdi:instagram" width={45} height={45} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
