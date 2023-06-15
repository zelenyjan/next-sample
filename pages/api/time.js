const os = require("os");

export default function handler(req, res) {
    res.status(200).json({ currentDatetime: Date.now(), hostname:  os.hostname()})
}