document.getElementById('discountform').addEventListener('submit', function(e){
    e.preventDefault(); // prevent form reload

    const name= document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    let discount = `0%`;

    if (age >= 0 && age < 5) {
        discount = `100%`;
    } else if (age > 5 && age < 8) {
        discount = `50%`;
    } else if (gender === 'female') {
        discount = `50%`;
    } else if (age > 65) {
        discount = `30%`;
    }
    document.getElementById("result").innerText= name + ", you are applicable for a discount of "+discount +".";
    


});
