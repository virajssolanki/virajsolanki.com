(function(){
  // If the widget already exists (e.g. hard-coded on one page) don’t create another.
  if(!document.getElementById('subscribe-widget')){
    const wrapper=document.createElement('div');
    wrapper.innerHTML=`<div class="subscribe-fixed container" id="subscribe-widget">
      <form class="email-form" id="email-form" action="https://formsubmit.co/a88e269d13ce706dc8e0f82f0f518341" method="POST">
        <input type="email" name="email" placeholder="you@example.com" required />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="New subscriber to virajsolanki.com" />
        <input type="hidden" name="_captcha" value="false" />
        <button type="submit">Subscribe</button>
      </form>
      <p id="form-msg" style="margin-top:1rem;font-size:0.9rem;text-align:center;"></p>
    </div>`;
    // Insert at end of body so it sits above other fixed elements like toast etc.
    document.body.appendChild(wrapper.firstElementChild);
  }

  const emailForm=document.getElementById('email-form');
  const msgEl=document.getElementById('form-msg');

  function showMessage(text,type='success'){
    if(!msgEl) return;
    msgEl.textContent=text;
    msgEl.style.color=(type==='success')?'green':'#c0392b';
  }

  if(emailForm){
    emailForm.addEventListener('submit',async function(e){
      e.preventDefault();
      const formData=new FormData(emailForm);
      try{
        const response=await fetch('https://formsubmit.co/ajax/a88e269d13ce706dc8e0f82f0f518341',{
          method:'POST',
          body:formData
        });
        if(response.ok){
          showMessage('Gotchaaa, you’re in.','success');
          emailForm.style.display='none';
        }else{
          showMessage('Oops, try again later.','error');
        }
      }catch(err){
        console.error(err);
        showMessage('Network error. Try again.','error');
      }
    });
  }
})();