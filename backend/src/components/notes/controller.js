const { get, add, oneNote, remove, update } = require("./store");

const getNotes = () => {
  return new Promise((resolve, reject) => {
    resolve(get());
  });
};

const getNote = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("No Existe ese ID");
      return false;
    }
    resolve(oneNote(id));
  });
};

const createNote = (title, content, author) => {
  const fullNote = {
    title: title,
    content: content,
    author: author,
  };
  add(fullNote);
  return fullNote;
};

const updateNote = (id, body) => {
  const { title, content, author, date } = body;
  const fullNote = {
    title: title,
    content: content,
    author: author,
    date: date,
  };
  update(id, fullNote);
};

const deleteNote = (id) => {
  remove(id);
};

module.exports = {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
