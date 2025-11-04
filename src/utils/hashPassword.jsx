
export async function hashPassword(password) {          
  const encoder = new TextEncoder();                  
  const data = encoder.encode(password);                      
  const buf = await crypto.subtle.digest("SHA-256", data);  
  const arr = Array.from(new Uint8Array(buf));              
  return arr.map(b => b.toString(16).padStart(2, "0")).join("");
}
