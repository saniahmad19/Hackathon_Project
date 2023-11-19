var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contests) => {

  ihtml = ""


  for (item in contests) {


    var s = new Date(contests[item].start_time).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });
    var e = new Date(contests[item].end_time).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });

    ihtml += `
    <div class="card" style="width: 20rem;">
        
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text">Site is ${contests[item].site}</p>
          <p >Starts at:${s}</p>
          <p >Ends at:${e} </p>
          <a href="${contests[item].url}" class="btn btn-primary">Visit Page</a>
        </div>
      </div>
    
    
    `



  }
  cardContainer.innerHTML = ihtml
});
