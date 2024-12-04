
const seat_add = document.getElementById('seat_add');
const seat_length = document.getElementById('seat_length');
const total_seat = document.getElementById('total_seat');
const ticket_amount = document.getElementById('ticket_amount');
const current_amount = document.getElementById('current_amount');
const coupon_field_input = document.getElementById('coupon_field_input');
const blocked = document.getElementById('blocked');
const coupon_amount = document.getElementById('coupon_amount');
const next_btn = document.getElementById('next_btn');
const phone_number = document.getElementById('phone_number');
const passenger_name = document.getElementById ('passenger_name');
const email_id = document.getElementById ('email_id');




let selected_set = [];



function showSeat(event) {

    const value = event.innerText;


    if (selected_set.includes(value)) {
        return alert('This Seat Already Booked');
    }
    else if (selected_set.length < 4) {
        // increase calculate
        selected_set.push(event.innerText);
        seat_length.innerText = selected_set.length;

        // decrease calculate

        const total_bus_seat = parseFloat(total_seat.innerText);
        const bus_seat = total_bus_seat - 1;
        total_seat.innerText = bus_seat;

        // amount check

        const bus_ticket_amount = parseFloat(ticket_amount.innerText);
        const ticket_current_amount = parseFloat(current_amount.innerText);
        const update_amount = bus_ticket_amount + ticket_current_amount;
        current_amount.innerText = update_amount.toFixed(2);
        passenger_name.removeAttribute ('disabled')
        phone_number.removeAttribute ('disabled')
        email_id.removeAttribute ('disabled')

        //  default text remove
        blocked.classList.add('hidden')


        event.classList.add('bg-[#1DD100]');
        event.classList.add('text-white')

        seat_add.innerHTML += `<li class="text-base font-normal flex justify-between">
  <span>${event.innerText}</span>
  <span>Economy</span>
  <span>550</span>
  </li>`;

        if (selected_set.length > 3) {
            coupon_field_input.removeAttribute('disabled');
            coupon_apply.removeAttribute('disabled')
        }
    }
    else {
        return alert('Maximum Seat Already Booked')
    }


    //  if (coupon_field === 'NEW15' || coupon_apply === 'Couple20') {
    //     console.log('coupon code ami peye gechi')
    //  }

}


// coupon button funciton 

document.getElementById('coupon_apply').addEventListener('click', function (event) {
    event.preventDefault();

    const coupon_field = coupon_field_input.value;

    if (coupon_field === 'NEW15') {
        const coupon_current_amount = parseFloat(coupon_amount.innerText);
        const currentAmountValue = parseFloat(current_amount.innerText);
        discount = (15 / 100) * currentAmountValue;
        const remainder_discount = currentAmountValue - discount;
        const update_discount = remainder_discount + coupon_current_amount;
        coupon_amount.innerText = update_discount.toFixed(2);
        

    } else if (coupon_field === 'Couple 20') {
        const coupon_current_amount = parseFloat(coupon_amount.innerText);
        const currentAmountValue = parseFloat(current_amount.innerText);
        discount = (20 / 100) * currentAmountValue;
        const remainder_discount = currentAmountValue - discount;
        const update_discount = remainder_discount + coupon_current_amount;
        coupon_amount.innerText = update_discount.toFixed(2);

    } else {
        return alert('This is not a valid coupon code');
    }

    // Display discount in coupon_field_value
    const coupon_field_value = document.getElementById('coupon_field_value');
    coupon_field_value.innerHTML = `
        <div class="flex gap-24 justify-between">
            <p>Discount</p>
            <p>-BDT:${discount.toFixed(2)}</p>
        </div>
    `;
});



     phone_number.addEventListener('input', function (e) {
        const phone_input = e.target.value;

    // const phone_numbner = document.getElementById('phone_number').value;

    if (phone_input.length === 11 && /^[0-9]+$/.test(phone_input)) {
        next_btn.removeAttribute('disabled')
    }
    else {
        console.log('is not completed')
    }

})


document.getElementById ('continue_btn').addEventListener ('click', function () {
    window.location.reload();
})


if (coupon_amount.innerText > 1) {
    console.log(typeof coupon_amount.innerText)
    
}
else {
    console.log('remove hoy nai')
}





