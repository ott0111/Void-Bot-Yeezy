let stats = new Map();

function trackMessage(message) {
  if (!stats.has(message.author.id)) {
    stats.set(message.author.id, { messages: 0, tickets: 0 });
  }
  stats.get(message.author.id).messages++;
}

function addTicket(userId) {
  if (!stats.has(userId)) {
    stats.set(userId, { messages: 0, tickets: 0 });
  }
  stats.get(userId).tickets++;
}

function getStats() {
  return stats;
}

module.exports = { trackMessage, addTicket, getStats };
