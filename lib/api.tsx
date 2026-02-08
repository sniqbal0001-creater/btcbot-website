export async function getLiveData() {
    const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
        cache: "no-store",
    });

    return res.json();
}
