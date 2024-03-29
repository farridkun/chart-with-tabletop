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
                obj = [data.NamaProduk, Number(data.JumlahPenjualan)];
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

            data.addRows(dataStuff);

            var options = {
                'title': 'List NamaProduk with JumlahPenjualan',
                'width': 600,
                'height': 600,
                colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
                titleTextStyle: { color: 'pink', fontSize: 20 },
                is3D: true,
                legendAlignment: 'center',
                backgroundColor: 'black',
                legend: { position: 'bottom' },
                legendTextStyle: {
                    color: 'pink',
                },
                legendAlign: 'center'
            };

            var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        }