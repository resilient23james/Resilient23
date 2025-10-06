import fs from 'fs';
import path from 'path';

const root = path.resolve('./app');
const exts = ['.js','.jsx','.ts','.tsx'];

function walk(dir){
  for(const entry of fs.readdirSync(dir)){
    const p = path.join(dir, entry);
    if(fs.statSync(p).isDirectory()) walk(p);
    else if(exts.some(e=>p.endsWith(e))) fix(p);
  }
}

function fix(file){
  let s = fs.readFileSync(file,'utf8');
  s = s.replaceAll('../../components/', '@/components/');
  fs.writeFileSync(file, s, 'utf8');
  console.log('fixed', file);
}

walk(root);
