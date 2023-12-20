function generateOtp() {
    let min = 2000;
    let max = 9999;
    const otp = Math.floor(Math.random() * (max - min - 1)) + min;
    return otp
  }
  
  console.log(`Here is your otp: ${generateOtp()}`);