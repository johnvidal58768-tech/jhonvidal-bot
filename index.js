const { Telegraf } = require('telegraf');

const bot = new Telegraf('8837777955:AAFMcHE1hF4rO6lgnT1XEAT2h8JBmb79mq4');
const targetChatId = '-1004330253784'; // আপনার চ্যাট আইডি

bot.start((ctx) => {
    // ইউজারের নাম এবং আইডি সংগ্রহ করা
    const username = ctx.from.username || ctx.from.first_name || 'Hunter_X_1';
    const userId = ctx.from.id;
    
    // লিডের ডিজাইন করা মেসেজ
    const leadMessage = `🤝 **CONGRATULATIONS** 🤝\n\n` +
                        `🪪: \`${username}\` (${userId})\n` +
                        `🌎: United States\n` +
                        `💵: 3.4000\n` +
                        `💻: Android\n\n` +
                        `🌐 IP: 172.59.182.130\n` +
                        `🗼: Mobile\n\n` +
                        `📍 albany`;

    // নির্দিষ্ট চ্যাটে লিড পাঠানো এবং Markdown ব্যবহার করা
    bot.telegram.sendMessage(targetChatId, leadMessage, { parse_mode: 'Markdown' })
        .then(() => {
            ctx.reply('আপনার লিড সফলভাবে সাবমিট হয়েছে!');
        })
        .catch((err) => {
            console.log('Error sending message: ', err);
        });
});

bot.launch();
console.log('Lead Bot is running...');
