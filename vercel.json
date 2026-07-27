const express = require('express');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const TELEGRAM_BOT_TOKEN = '8837777955:AAFMcHE1hF4rO6lgnT1XEAT2h8JBmb79mq4';
const TELEGRAM_CHAT_ID = '-1004330253784';

app.get('/postback', async (req, res) => {
    const { name, ip, offer, city, country, payout } = req.query;

    const message = `🚨 **NEW CONVERSION** 🚨\n\n` +
                    `👤 **Name:** ${name || 'N/A'}\n` +
                    `🎯 **Offer:** ${offer || 'N/A'}\n` +
                    `💰 **Payout:** $${payout || '0.00'}\n` +
                    `🌐 **IP:** ${ip || 'N/A'}\n` +
                    `🏙️ **City:** ${city || 'N/A'}\n` +
                    `🌍 **Country:** ${country || 'N/A'}`;

    try {
        const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        await fetch(telegramUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });

        res.status(200).send('Notification sent successfully!');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
