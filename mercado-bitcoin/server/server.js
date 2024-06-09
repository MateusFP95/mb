import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

let dadosUsr = null;
app.use(bodyParser.json());
app.use(cors());
app.get('/registration', (req, res) => {
  const formularioHTML = `
  <html>
    <body>
      <h1>Formulário de Registro</h1>
      ${dadosUsr ? `<p>Dados enviados anteriormente: ${JSON.stringify(dadosUsr)}</p>` : ''}
      <!-- Adicione aqui o restante do seu formulário -->
    </body>
  </html>
`;

  res.send(formularioHTML);
});

app.post('/registration', (req, res) => {
  const { type } = req.body;

  const commonFields = ['email', 'telefone', 'senha'];

  const pfFields = ['nome', 'cpf', 'dataNascimento'];
  const pjFields = ['razaoSocial', 'cnpj', 'dataAbertura'];

  const missingCommonFields = commonFields.filter(field => !req.body[field]);
  setTimeout(() => {
    if (missingCommonFields.length > 0) {
      return res.status(400).json({ error: `Campos obrigatórios ausentes: ${missingCommonFields.join(', ')}` });
    }

    if (type === 'fisica') {
      const missingFields = pfFields.filter(field => !req.body[field]);
      if (missingFields.length > 0) {
        return res.status(400).json({ error: `Campos obrigatórios ausentes: ${missingFields.join(', ')}` });
      }
    } else if (type === 'juridica') {
      const missingFields = pjFields.filter(field => !req.body[field]);
      if (missingFields.length > 0) {
        return res.status(400).json({ error: `Campos obrigatórios para ausentes: ${missingFields.join(', ')}` });
      }
    } else {
      return res.status(400).json({ error: 'Erro' });
    }

    dadosUsr = req.body;
    res.status(200).json({ success: true });
}, 5000);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});