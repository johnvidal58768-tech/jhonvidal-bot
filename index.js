const { Telegraf } = require('telegraf');

const bot = new Telegraf('8837777955:AAFMcHE1hF4rO6lgnT1XEAT2h8JBmb79mq4');

// নির্দিষ্ট চ্যাট আইডিতে মেসেজ পাঠানোর উদাহরণ
bot.telegram.sendMessage('-1004330253784', 'হ্যালো! adbulmedia বট সচল রয়েছে।');
