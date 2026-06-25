"use client";

import { useState, useRef } from "react";
import { ArrowDownRight, Upload, FileText, X, Send } from "lucide-react";

export default function TrabalheConoscoPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [erro, setErro] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.type !== "application/pdf") {
      setErro("Por favor, envie o currículo em formato PDF.");
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      setErro("O arquivo deve ter no máximo 5 MB.");
      return;
    }
    setErro("");
    setFile(f);
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: conectar a um serviço de envio (Web3Forms, Formspree, etc.)
    // Por enquanto apenas previne o envio.
    alert(
      "Formulário pronto! O envio será conectado em breve. Obrigado pelo interesse.",
    );
  };

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Cabeçalho */}
        <div className="text-center">
          <span className="section-eyebrow">Faça parte do time</span>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-lae-ink sm:text-5xl">
            Trabalhe <span className="heading-accent">conosco</span>
          </h1>
          <ArrowDownRight
            className="mx-auto mt-2 size-6 text-lae-stone/50"
            aria-hidden="true"
          />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-lae-stone">
            Estamos sempre em busca de talentos que compartilhem nossos valores de
            excelência técnica e atendimento exclusivo. Mesmo sem uma vaga aberta
            no momento, deixe seu currículo no nosso banco de talentos — quando
            surgir a oportunidade certa, entraremos em contato.
          </p>
        </div>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-6 rounded-2xl border border-lae-ink/10 bg-card p-7 shadow-xl sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Nome completo" htmlFor="nome">
              <input
                id="nome"
                name="nome"
                type="text"
                required
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                className="lae-input"
              />
            </Field>

            <Field label="Telefone" htmlFor="telefone">
              <input
                id="telefone"
                name="telefone"
                type="tel"
                required
                value={form.telefone}
                onChange={handleChange}
                placeholder="(41) 99999-9999"
                className="lae-input"
              />
            </Field>
          </div>

          <Field label="E-mail" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              className="lae-input"
            />
          </Field>

          <Field label="Mensagem" htmlFor="mensagem">
            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              value={form.mensagem}
              onChange={handleChange}
              placeholder="Conte um pouco sobre você, sua experiência e área de interesse."
              className="lae-input resize-none"
            />
          </Field>

          {/* Upload de currículo */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-lae-ink">
              Currículo (PDF)
            </label>

            {!file ? (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-lae-ink/15 bg-lae-amber/5 px-6 py-8 text-center transition-colors hover:border-lae-amber/50 hover:bg-lae-amber/10"
              >
                <Upload className="size-6 text-lae-amber-deep" />
                <span className="text-sm font-medium text-lae-ink">
                  Clique para anexar seu currículo
                </span>
                <span className="text-xs text-lae-stone">
                  Apenas PDF, até 5 MB
                </span>
              </button>
            ) : (
              <div className="flex items-center justify-between gap-3 rounded-xl border border-lae-ink/10 bg-lae-amber/10 px-4 py-3">
                <div className="flex min-w-0 items-center gap-3">
                  <FileText className="size-5 shrink-0 text-lae-amber-deep" />
                  <span className="truncate text-sm font-medium text-lae-ink">
                    {file.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  aria-label="Remover arquivo"
                  className="flex size-7 shrink-0 items-center justify-center rounded-full text-lae-stone transition-colors hover:bg-lae-ink/10 hover:text-lae-ink"
                >
                  <X className="size-4" />
                </button>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              onChange={handleFile}
              className="hidden"
            />

            {erro && <p className="mt-2 text-sm text-red-600">{erro}</p>}
          </div>

          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-lae-amber to-lae-gold px-7 py-4 text-[15px] font-semibold text-lae-ink shadow-[0_2px_12px_-2px_rgba(248,196,79,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-4px_rgba(248,196,79,0.6)] hover:brightness-[1.03]"
          >
            Enviar candidatura
            <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          <p className="text-center text-xs text-lae-stone">
            Ao enviar, você concorda com o uso dos seus dados para fins de seleção.
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-lae-ink"
      >
        {label}
      </label>
      {children}
    </div>
  );
}