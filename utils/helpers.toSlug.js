module.exports = function toSlug(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z|A-Z|0-9]/g, '-');
};
