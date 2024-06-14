import Conferencia from '../models/Conferencia.js';

const addConferencia = async (req, res) => {
    try {
        const { nome, link, data } = req.body;
        if (!nome || !link || !data) {
            return res.status(400).send({ mensagem: 'Informações incompletas' });
        }

        // Verificar conferência com mesma data
        const conferenciaExistente = await Conferencia.findAll({ where: { data: data } });
        console.log("aqui")
        console.log(conferenciaExistente)
        if (conferenciaExistente) {
            return res.status(400).send({ mensagem: 'Já existe uma conferência cadastrada para esta data' });
        }

        // Criar conferência
        const confCadastrada = await Conferencia.create({ nome, link, data });
        res.status(201).send({ confCadastrada });
        console.log('Conferência cadastrada:', confCadastrada);
    } catch (erro) {
        console.error('Erro ao inserir conferência:', erro);
        res.status(500).send({ mensagem: 'Erro ao inserir conferência' });
    }
};

export {
    addConferencia
};
