import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  request: Request
) {
  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Método não permitido." }),
      {
        status: 405,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  try {
    const { email } = await request.json();

    if (!email) {
      return new Response(
        JSON.stringify({
          error: "E-mail é obrigatório.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Casa Verde <onboarding@resend.dev>",
      to: [email],
      subject: "Boas-vindas à Casa Verde!",
      html: `
        <p>Olá!</p>

        <p>
          Boas-vindas à Casa Verde! Você se cadastrou em nossa
          newsletter e vai começar a receber e-mails com as novidades
          de nossa loja e dicas de como cuidar de suas plantas.
        </p>

        <p>Até logo!</p>
      `,
    });

    if (error) {
      console.error(error);

      return new Response(
        JSON.stringify({ error }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({ data }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        error: "Erro ao enviar e-mail.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
