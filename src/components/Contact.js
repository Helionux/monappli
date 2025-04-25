export const Partenaire = () => {
    return ( 
        <form className="partenaire">
            <div className="partenaire-title">
                <div className="input-group">
                <input className="input" required type="text"></input>
                <label className="label">Nom</label>
                </div>
                <div className="input-group">
                <input className="input" required type="text"></input>
                <label className="label">Prénom</label> 
                </div>
            </div>
            <div className="partenaire-title">
                <div className="input-group">
                <input className="input" required type="email"></input>
                <label className="label">Email</label>  
                </div>
                <div className="input-group">
                <input className="input" required type="tel"></input>
                <label className="label">Tél</label>  
                </div>
            </div>
            <div className="partenaire-title">
            <div className="input-group">
                <input className="input" required type="text"></input>
                <label className="label">Quartiers</label>  
            </div>
            <div className="input-group">
                <input className="input" required type="text"></input>
                <label className="label">Adresse</label>  
            </div>
            </div>
            <div className="messages">  
                <label>Messages</label>
                <textarea placeholder="Décrivez la raison de votre réclamation..." rows="10" cols="50"></textarea>
            </div>
            <button>Envoyer</button>
        </form>
     );
}


