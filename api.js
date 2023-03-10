function fetchData() {
    fetch("https://hook.us1.make.com/ohgv1quwwoy9wx1cax3st6c5s1yylgce")
        .then(response => {
        return response.json();
        })
        .then(data => {
            console.log(data);
            data.map(task => {
                document.querySelector('#task-title').innerHTML = task.task_title;
                document.querySelector('#task-description').innerHTML = task.task_description;
                var minutes = task.timer_duration;
                var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
                getCountdown(target_date);
            })
        });
}
window.addEventListener('load', function () {
    setInterval(fetchData(), 10000);
});