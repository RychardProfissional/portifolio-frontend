"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Comment } from "@/prisma-generated";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um endereço de email válido.",
  }),
  content: z.string().min(10, {
    message: "Comentário deve ter pelo menos 10 caracteres.",
  }),
  rating: z.number().min(1).max(5),
  policyUpdateConsent: z.boolean().default(false).optional(),
});

interface CommentSectionProps {
  projectId: string;
  initialComments: Comment[];
}

export function CommentSection({
  projectId,
  initialComments,
}: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      content: "",
      rating: 5,
      policyUpdateConsent: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectId,
          ...values,
        }),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar comentário");
      }

      const newComment = await response.json();
      setComments((prev) => [newComment, ...prev]);
      form.reset();
      toast.success("Comentário enviado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Falha ao enviar comentário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Deixe um Comentário</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="seu.email@exemplo.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Avaliação</FormLabel>
                    <FormControl>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-6 h-6 cursor-pointer transition-colors ${
                              star <= field.value
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                            onClick={() => field.onChange(star)}
                          />
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comentário</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Compartilhe seus pensamentos..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="policyUpdateConsent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        (Opcional) Desejo receber e-mails apenas quando houver alterações na{" "}
                        <a
                          href="/privacy"
                          target="_blank"
                          className="text-primary hover:underline"
                        >
                          Política de Privacidade
                        </a>
                      </FormLabel>
                      <p className="text-sm text-muted-foreground">
                        Você pode revogar este consentimento a qualquer momento.
                      </p>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Comentário"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Comentários ({comments.length})</h3>
        {comments.length === 0 ? (
          <p className="text-muted-foreground">
            Nenhum comentário ainda. Seja o primeiro a compartilhar seus pensamentos!
          </p>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <Card key={comment.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${comment.name}`}
                      />
                      <AvatarFallback>
                        {comment.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{comment.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {new Date(comment.createdAt).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${
                                star <= (comment.rating || 5)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm">{comment.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
