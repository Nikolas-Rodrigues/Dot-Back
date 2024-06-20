import Conferencia from '../models/Conferencia.js';

const addConferencia = async (req, res) => {
    const { nome, link, data } = req.body;
    const conferenciaExistente = await Conferencia.findOne({ where: { data: data } });
    try {
        if (conferenciaExistente) {
            return res.status(400).send({ mensagem: 'Já existe uma conferência cadastrada para esta data' });
        } else {
            const confCadastrada = await Conferencia.create({ nome, link, data });
            res.status(201).send({ confCadastrada });
            console.log('Conferência cadastrada:', confCadastrada);
        }
    } catch (erro) {
        console.error('Erro ao inserir conferência:', erro);
        res.status(500).send({ mensagem: 'Erro ao inserir conferência' });
    }
};


export {
    addConferencia
};
