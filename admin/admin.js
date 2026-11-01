
const themeButton=document.getElementById('themeToggle');
function applyTheme(t){document.documentElement.dataset.theme=t;localStorage.setItem('vid-admin-theme',t);if(themeButton)themeButton.textContent=t==='dark'?'☼':'☾'}
applyTheme(localStorage.getItem('vid-admin-theme')||'dark');
if(themeButton)themeButton.addEventListener('click',()=>applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
const loginForm=document.getElementById('loginForm');
if(loginForm)loginForm.addEventListener('submit',e=>{e.preventDefault();location.href='admin-dashboard.html'});
const customerSearch=document.getElementById('customerSearch');
if(customerSearch)customerSearch.addEventListener('input',()=>{let q=customerSearch.value.toLowerCase();document.querySelectorAll('#customerTable tbody tr').forEach(r=>r.style.display=r.innerText.toLowerCase().includes(q)?'':'none')});
const invoiceSearch=document.getElementById('invoiceSearch');
if(invoiceSearch)invoiceSearch.addEventListener('input',()=>{let q=invoiceSearch.value.toLowerCase();document.querySelectorAll('#invoiceTable tbody tr').forEach(r=>r.style.display=r.innerText.toLowerCase().includes(q)?'':'none')});
const listView=document.getElementById('listView'),calendarView=document.getElementById('calendarView');
if(listView&&calendarView){listView.onclick=()=>{document.getElementById('listPanel').style.display='block';document.getElementById('calendarPanel').style.display='none';listView.className='btn';calendarView.className='btn ghost'};calendarView.onclick=()=>{document.getElementById('listPanel').style.display='none';document.getElementById('calendarPanel').style.display='block';calendarView.className='btn';listView.className='btn ghost';renderCalendar()}}
let calDate=new Date(2026,9,1);
function renderCalendar(){let el=document.getElementById('calendar');if(!el)return;let y=calDate.getFullYear(),m=calDate.getMonth();document.getElementById('monthTitle').textContent=calDate.toLocaleDateString('en-US',{month:'long',year:'numeric'});let names=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];el.innerHTML=names.map(n=>`<div class="dayname">${n}</div>`).join('');let first=new Date(y,m,1).getDay(),days=new Date(y,m+1,0).getDate(),prev=new Date(y,m,0).getDate();for(let i=0;i<42;i++){let n=i-first+1,valid=n>0&&n<=days,num=n<=0?prev+n:n>days?n-days:n;let cell=document.createElement('div');cell.className='day'+(!valid?' out':'');cell.innerHTML=`<span class="daynum">${num}</span>`;if(valid&&m===9&&[31].includes(n))cell.innerHTML+=`<span class="event">W-03 · Sari W.</span>`;if(valid&&m===10&&[2,3].includes(n))cell.innerHTML+=`<span class="event blue">N-04 · Andi P.</span>`;if(valid&&m===10&&[5,6].includes(n))cell.innerHTML+=`<span class="event">W-02 · Rina M.</span>`;if(valid&&m===10&&n===9)cell.innerHTML+=`<span class="event blue">N-07 · Fajar R.</span>`;el.appendChild(cell)}}
const prev=document.getElementById('prevMonth'),next=document.getElementById('nextMonth');if(prev)prev.onclick=()=>{calDate.setMonth(calDate.getMonth()-1);renderCalendar()};if(next)next.onclick=()=>{calDate.setMonth(calDate.getMonth()+1);renderCalendar()};
const newInvoice=document.getElementById('newInvoice'),preview=document.getElementById('invoicePreview');if(newInvoice)newInvoice.onclick=()=>{preview.style.display='block';preview.scrollIntoView({behavior:'smooth'})};
document.querySelectorAll('.previewInvoice').forEach(b=>b.addEventListener('click',()=>{preview.style.display='block';preview.scrollIntoView({behavior:'smooth'})}));
const closeInvoice=document.getElementById('closeInvoice');if(closeInvoice)closeInvoice.onclick=()=>preview.style.display='none';
