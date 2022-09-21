/*
 * @Author: Salah 2236291956@qq.com
 * @Date: 2022-09-09 14:13:16
 * @LastEditors: Salah 2236291956@qq.com
 * @LastEditTime: 2022-09-09 16:29:15
 * @FilePath: \my-wave-portal\scripts\deploy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
    const main = async () => {
        const [deployer] = await hre.ethers.getSigners();
        const accountBalance = await deployer.getBalance();

        console.log("Deploying contracts with account: ", deployer.address);
        console.log("Account balance: ", accountBalance.toString());

        const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
        const waveContract = await waveContractFactory.deploy({
            value: hre.ethers.utils.parseEther("0.001"),
        });
        await waveContract.deployed();

        console.log("WavePortal address: ", waveContract.address);


        await waveContract.deployed();

        console.log("WavePortal address: ", waveContract.address);
    };

    const runMain = async () => {
        try {
            await main();
            process.exit(0);
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    };

    runMain();