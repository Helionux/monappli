export const Partenaire = () => {
    return ( 
        <div className="partenaire">
            <div className="input-group">
                <input className="input" required type="text"></input>
                <label className="label">Nom</label>
                
            </div>
            <div className="input-group">
                <input className="input" required type="text"></input>
                <label className="label">Prénom</label>
                
            </div>
            <div className="input-group">
                <input className="input" required type="email"></input>
                <label className="label">Email</label>  
            </div>
            <div className="input-group">
                <input className="input" required type="tel"></input>
                <label className="label">Tél</label>  
            </div>
            <div className="input-group">
                <input className="input" required type="password"></input>
                <label className="label">Mot de passe</label>  
            </div>
            <button>Envoyer</button>
        </div>
     );
}

