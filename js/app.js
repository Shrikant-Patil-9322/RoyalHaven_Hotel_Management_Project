/* RoyalHaven shared frontend logic (data stored in browser localStorage - demo only) */
const RH={
  WA:'919322320744',                                   // hotel WhatsApp number (country code + number)
  ADMIN:{email:'shrikant@gmail.com',password:'12345'}, // demo admin login
  get(k,d){try{const v=JSON.parse(localStorage.getItem('rh_'+k));return v==null?d:v}catch(e){return d}},
  set(k,v){localStorage.setItem('rh_'+k,JSON.stringify(v))},
  session(){return this.get('session',null)},
  wa(msg,num){return 'https://wa.me/'+(num||this.WA)+'?text='+encodeURIComponent(msg)},
  money(n){return '₹'+Number(n).toLocaleString('en-IN')},
  toast(msg,ms){const t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),ms||3500)},
  logout(){localStorage.removeItem('rh_session');location.href='index.html'}
};
document.addEventListener('DOMContentLoaded',()=>{
  // WhatsApp floating chat button
  const w=document.createElement('a');w.classNamel='wa-float';w.target='_blank';w.rel='noopener';
  w.title='Chat on WhatsApp';w.setAttribute('aria-label','Chat on WhatsApp');
  w.href=RH.wa('Hello RoyalHaven, I would like to know more about your rooms.');
  w.textContent='💬';
  document.body.appendChild(w);
  // Navbar: login / logout / dashboard
  const ul=document.querySelector('.nav-links');if(!ul)return;
  const s=RH.session(),li=document.createElement('li');
  if(s){li.innerHTML=(s.role==='admin'?'<a href="admin.html">Dashboard</a> ':'')+'<a href="#" id="lo">Logout ('+s.name.split(' ')[0]+')</a>';
    ul.insertBefore(li,ul.lastElementChild);li.querySelector('#lo').onclick=e=>{e.preventDefault();RH.logout()}}
  else{li.innerHTML='<a href="login.html">Login</a>';ul.insertBefore(li,ul.lastElementChild)}
});
