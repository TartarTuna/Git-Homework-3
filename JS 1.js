//乘法
function multiplication() {
    for (i = 1; i < 16; i++) {
        for (k = 1; k < 16; k++) {
            let answer = i + "x" + k + "=" + (i * k);
            console.log(answer);
        };
    };
};

multiplication()