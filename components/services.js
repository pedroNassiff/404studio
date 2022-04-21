import axios from 'axios'

export const getIP = () => {
    return axios
        .get("https://api.ipify.org?format=jsonp&callback=getIP", {
            //   headers: { Authorization: `Bearer `+TOKEN }      
        })
        .then(res => {
            console.log("resdata====>", json);
            function getIP(json) {
                console.log("My public IP address is: ", json.ip);
              }
            return res
            
        })
        .catch(err => {
            return err
        })
        
}
getIP()