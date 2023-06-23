// 判断当前是不是使用pnpm
if (!/pnpm/.test(process.env.npm_execpath)) {
  console.error('Please use pnpm to install depends!');
  process.exit(1);
}
