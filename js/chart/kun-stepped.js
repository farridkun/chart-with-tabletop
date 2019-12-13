var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1Sie_FhpJ_ipNx2GqgE0igJI7e8F-rPblUxLph9rU7k4/edit?usp=sharing';

function init() {
    Tabletop.init({
        key: public_spreadsheet_url,
        callback: showInfo,
        simpleSheet: true
    })
}

function showInfo(data, tabletop) {

    var container = document.querySelector(".container");
    container.innerHTML = "";

    var doubles = data.map(function (data) {

        var obj = {};
        obj = [data.NamaProduk, Number(data.JumlahPenjualan), Number(data.JumlahStok), Number(data.SisaStok)];
        console.log(data.NamaProduk);
        return obj;
    })

    drawChart(doubles);

}


google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(init);

function drawChart(dataStuff) {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'NamaProduk');
    data.addColumn('number', 'JumlahPenjualan');
    data.addColumn('number', 'JumlahStok');
    data.addColumn('number', 'SisaStok');

    data.addRows(dataStuff);

    var options = {
        title: 'Penjualan Produk Apple',
        vAxis: { title: 'oleh @Farrid_jr' },
        isStacked: true
    };

    var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}
