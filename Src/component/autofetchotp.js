import RNOtpVerify from 'react-native-otp-verify';
export const autoFetchOtp = () => {
    RNOtpVerify.getOtp().then(p => RNOtpVerify.addListener(message => {
        try {
            if (message) {
                const messageArr = message.split('\n');
                if (messageArr[2]) {
                    const otp = messageArr[2].split(' ')[0];
                    if (otp.length === 6) {
                        RNOtpVerify.removeListener();
                        return opt.split('');
                    }
                }
            }
        } catch (error) {
            logErrorWithMessage(
                error.message,
                'RNOtpVerify.getotp - read message, OtpVerification')
        }
    })).catch(error => {
        logErrorWithMessage(
            error.message,
            'RNOtpVerify.getotp, OtpVerification')
    });

}