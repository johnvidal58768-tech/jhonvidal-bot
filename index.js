const { Telegraf } = require('telegraf');

const bot = new Telegraf('8837777955:AAFMcHE1hF4rO6lgnT1XEAT2h8JBmb79mq4');

// বটের মূল ফাংশন
bot.start((ctx) => {
    ctx.reply('স্বাগতম! adbulmedia টেলিগ্রাম বটে আপনাকে স্বাগতম।');
});

bot.on('text', (ctx) => {
    const text = ctx.message.text;
    // চাইলে নির্দিষ্ট চ্যাট আইডিতে মেসেজ পাঠাতে পারেন
    bot.telegram.sendMessage('-1004330253784', `নতুন মেসেজ এসেছে: ${text}`);
    ctx.reply('আপনার মেসেজটি গ্রহণ করা হয়েছে!');
});

bot.launch();
console.log('Adbul Media Bot is running...');
