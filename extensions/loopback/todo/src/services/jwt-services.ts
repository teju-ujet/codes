import { HttpErrors } from "@loopback/rest";
import { inject } from "@loopback/core";
import { UserProfile } from '@loopback/security';
import{promisify} from "util";//built in utility callback to promisies
import { TokenSecviceBindings, UserServiceBindings } from "../keys";
const jwt=require('jsonwebtoken');//include
const signAsync=promisify(jwt.sign)
export class JWTservices{
    @inject ('authentication.jwt.secret')
   //@inject(TokenSecviceBindings.TOKEN_SECRET)
    public readonly jwtSecret:string;
   // @inject(TokenSecviceBindings.TOKEN_EXPIRES_IN)
    @inject('authentication.jwt.expiresIn')
    public readonly jwtExprireIn:string;
    async generatetoken(userProfile:UserProfile):Promise<string>{
        if(!userProfile){
            throw new HttpErrors.Unauthorized(
                "error while genereting token:userprofile is null",
            );
        }
        let token=" ";
        try{
            token=await signAsync(userProfile,this.jwtSecret,{
                expiresIn:this.jwtExprireIn,
            });
        }catch(err){
            throw new HttpErrors.Unauthorized('error generating token ${err}');
        }
        return token;
    }
    async verifyToken(token:string):Promise<any>{
        return Promise.resolve({name:'teju',id:'1'});//dummy value
       
 }

}
