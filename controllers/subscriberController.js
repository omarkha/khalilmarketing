const Subscriber = require("../models/subscriber.model");

const getSubscribers = async (req, res) => {
  try {
    const subs = await Subscriber.find();
    res.status(200).json(subs);
  } catch (err) {
    res.send(err);
  }
};

const getSubscriber = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id : req.body.id;

    const sub = await Subscriber.findById(id);
    res.status(200).json(sub);
  } catch (err) {
    res.send(err);
  }
};

const addSubscriber = async (req, res) => {
  try {
    await Subscriber.create(req.body);
    res.status(200).send(`Sub added. Info: ${req.body}`);
  } catch (err) {
    res.send(err);
  }
};

const deleteSubscriber = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id : req.body.id;
    await Subscriber.findByIdAndRemove(id);
    res.status(200).send(`Sub removed. Id: ${id}`);
  } catch (err) {
    res.send(err);
  }
};

const updateSubscriber = async (req, res) => {
  try {
    const subs = await Subscriber.find();
    res.status(200).json(subs);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  addSubscriber,
  getSubscriber,
  getSubscribers,
  deleteSubscriber,
  updateSubscriber,
};
