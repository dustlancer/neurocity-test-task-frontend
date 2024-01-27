async function getUsers(page) {
    try {
        const response = await fetch(`https://reqres.in/api/users?page=${page}`);
        const data = await response.json();
        console.log(data.data);
        return data.data;
    } catch(error) {
        console.error(error);
        alert('Не удалось загрузить пользователей!');
    }
   
}

async function main() {
    let currentPage = 1
    let usersData = await getUsers(currentPage);
    displayList(usersData);


    load_more.addEventListener('click', () => {
        load_next();
    });

    function displayList(data) {
        const usersEl = document.querySelector('.users');
        
        data.forEach((user) => {
            displayUser(usersEl, user)
        })

    }

    function displayUser(parent, user) {
        let user_card = document.createElement('div');
        user_card.className = 'user-card glassy';
        let user_avatar = document.createElement('img');
        user_avatar.src = user.avatar;

        let name_surname = document.createElement('h5');
        name_surname.textContent = user.first_name + " " + user.last_name;

        let email = document.createElement('p');
        email.textContent = user.email;

        user_card.append(user_avatar, name_surname, email); 
        parent.append(user_card);   
    }

    async function load_next() {
        currentPage++;
        new_page_data = await getUsers(currentPage);
        if (new_page_data.length === 0) {
            return;
        }
        displayList(new_page_data);
        usersData = usersData.concat(new_page_data);
    }
    

}
main();