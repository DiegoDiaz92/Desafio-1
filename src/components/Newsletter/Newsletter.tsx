import { useState } from "react";
import "./Newsletter.css";
import mailIcon from "../../assets/images/mail.png";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isEmailValid) {
      return;
    }

    try {
      setIsSending(true);

      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar confirmação.");
      }

      alert(
        `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`
      );

      setEmail("");
    } catch (error) {
      console.error(error);

      alert("Não foi possível realizar sua assinatura.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="newsletter" onSubmit={handleSubmit}>
      <div className="newsletter__field">
        <img
          src={mailIcon}
          alt=""
          className="newsletter__icon"
        />

        <label
          htmlFor="newsletter-email"
          className="sr-only"
        >
          E-mail
        </label>

        <input
          id="newsletter-email"
          type="email"
          placeholder="Insira seu e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={!isEmailValid || isSending}
      >
        {isSending ? "Enviando..." : "Assinar newsletter"}
      </button>
    </form>
  );
}
