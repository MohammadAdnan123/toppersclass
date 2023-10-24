import "../styles/Register.css"
export default function Register(){
    return(
        <div class="registerdiv z-3 position-relative">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<label className="commonlabel" for="chk" aria-hidden="true">Sign up</label>
					<input className="reginput" type="text" name="txt" placeholder="User name" required=""/>
					<input className="reginput" type="email" name="email" placeholder="Email" required=""/>
					<input className="reginput" type="password" name="pswd" placeholder="Password" required=""/>
					<button className="authbutton">Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label className="commonlabel" for="chk" aria-hidden="true">Login</label>
					<input className="loginput" type="email" name="email" placeholder="Email" required=""/>
					<input className="loginput" type="password" name="pswd" placeholder="Password" required=""/>
					<button className="authbutton">Login</button>
				</form>
			</div>
	</div>
    )
}