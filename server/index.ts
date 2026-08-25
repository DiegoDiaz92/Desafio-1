import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const port = 3001;

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/api/newsletter", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      error: "E-mail é obrigatório.",
    });
  }

  try {
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

      return res.status(400).json({
        error: "Não foi possível enviar o e-mail.",
      });
    }

    return res.status(200).json({
      message: "E-mail enviado com sucesso.",
      data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro interno do servidor.",
    });
  }
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});