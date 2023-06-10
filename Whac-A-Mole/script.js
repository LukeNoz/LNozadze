
    var a = [
      "topoNo.jpg",
      "topoSi.jpg"
    ];

    var b = 0;
    var c = 0;
    var d = 200; // segundos
    var e;

    var f = {
      puntos: 3,
      restaPuntos: 1,
      velocidad: 2000
    };

    function i() {
      var j = document.querySelectorAll('.imagen');
      j.forEach(function(k) {
        k.style.backgroundImage = "url(" + a[0] + ")";
      });

      setTimeout(function() {
        var l = Math.floor(Math.random() * j.length);
        var m = j[l];
        m.style.backgroundImage = "url(" + a[1] + ")";
        setTimeout(function() {
          m.style.backgroundImage = "url(" + a[0] + ")";
        }, 1200);
      }, Math.random() * 2000);
    }

    function n(o) {
      if (o.style.backgroundImage.includes(a[1])) {
        c += f.puntos;
        document.getElementById("impacto-audio").play();
      } else if (o.style.backgroundImage.includes(a[0])) {
        c -= f.restaPuntos;
      } else {
        c;
      }

      o.style.backgroundImage = "url(" + o.dataset.golpe + ")";
      setTimeout(function () {
        o.style.backgroundImage = "url(" + a[b] + ")";
      }, 1200);

      document.getElementById('puntos').innerHTML = "Puntos: " + c;
    }

    function p() {
      clearInterval(e);
      c = 0;
      i();
      e = setInterval(i, f.velocidad);
      d = 200;
      document.getElementById('tiempo').innerHTML = "Tiempo: " + d;
      setInterval(q, 1000);
    }

    function q() {
      if (d > 0) {
        d--;
        document.getElementById('tiempo').textContent = `Tiempo restante: ${d} sec`;
      } else {
        clearInterval(e);
      }
    }


    document.querySelectorAll('.imagen').forEach(function(o) {
      o.addEventListener('click', function () {
        n(o);
      });
    });
    i();