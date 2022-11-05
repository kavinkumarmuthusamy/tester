function validateForm() {
    let fn= document.forms["myForm"]["fname"].value;
    let ln = document.forms["myForm"]["fname"].value;
    let pn = document.forms["myForm"]["fname"].value;
    let np = document.forms["myForm"]["fname"].value;
    let lp = document.forms["myForm"]["fname"].value;
    if (fn == "") {
      alert("Name must be filled out");
      return false;
    }
    if (ln == "") {
        alert("Name must be filled out");
        return false;
      }
    //   if (pn == Path2D.length) {
    //     alert("Name must be filled out");
    //     return false;
    //   }
    if((inputtxt.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }
      if (np == lp) {
        alert("Name must be filled out");
        return false;
      }
  }