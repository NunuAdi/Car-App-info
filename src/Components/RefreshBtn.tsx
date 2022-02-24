export const  RefreshBtn = () => {
    if (!localStorage.getItem('firstReload') || localStorage.getItem('firstReload') == 'true') {
        localStorage.setItem('firstReload', 'false');
        window.location.reload();
    } 
    else {
        localStorage.setItem('firstReload', 'true');
    }

    return(
        <div>
        </div>
    );
} 