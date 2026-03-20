const { ConvexHttpClient } = require('convex/browser');
const { anyApi } = require('convex/server');
const bcrypt = require('bcryptjs');

const url = process.argv[2];
if (!url) {
  console.error('Please provide a Convex URL!');
  process.exit(1);
}

const client = new ConvexHttpClient(url);

async function seedAdmin() {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync('admin123', salt);
  
  await client.mutation(anyApi.users.initAdmin, {
    username: 'admin',
    passwordHash: hashedPassword
  });
  console.log('✅ Admin initialized in Convex for URL: ' + url);
}

seedAdmin().catch(console.error);
