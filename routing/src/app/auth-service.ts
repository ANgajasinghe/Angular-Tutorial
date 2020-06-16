

export class AuthService {
    loggedIn = false;

    isAuthenticated(){
        const promice = new Promise(
            (resolve , reject) =>{
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800);
            }
        );

        return promice;
    }

    login(){
        this.loggedIn = true;
    }

    logOut(){
        this.loggedIn = false;
    }
}