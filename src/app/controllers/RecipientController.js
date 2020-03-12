import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const recipients = await Recipient.findAll({
      attributes: [
        'id',
        'name',
        'street',
        'complement',
        'number',
        'city',
        'state',
        'zip_code',
      ],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(recipients);
  }

  async store(req, res) {
    const {
      id,
      name,
      street,
      state,
      city,
      zip_code,
      number,
      complement,
    } = await Recipient.create(req.body);

    return res.status(201).json({
      id,
      name,
      street,
      state,
      city,
      zip_code,
      number,
      complement,
    });
  }

  async update(req, res) {
    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(401).json({ error: 'This recipient does not exist' });
    }

    await recipient.update(req.body);

    return res.status(200).json(recipient);
  }
}

export default new RecipientController();
