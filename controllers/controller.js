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






const exConferencia = async (req, res) => {
    const dia = req.body.dia;
    console.log(req.body)
    console.log(dia)
    console.log("aqui")
    const conferenciaExistente = await Conferencia.findOne({ where: { data: dia } });
    try {
        if (!conferenciaExistente) {
            return res.status(404).send({ mensagem: 'Conferência não encontrada para a data fornecida' });
        }
        else {
            await Conferencia.destroy({ where: { data: dia } });
            res.status(200).send({ mensagem: 'Conferência excluída com sucesso' });
        }
    } catch (erro) {
        console.error('Erro ao excluir conferência:', erro);
        res.status(500).send({ mensagem: 'Erro ao excluir conferência' });
    }
};











export {
    addConferencia, exConferencia
};
