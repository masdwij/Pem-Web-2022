var apl = new function() {
    this.el = document.getElementById('mhs');

    this.mhs = ['Ahmad Rayhan','Dani','Bayu','Santi'];

    this.barisAll = function() {
        var data = '';

        if (this.mhs.length > 0){
            for (i = 0; i < this.mhs.length; i++){
                data += '<tr>';
                data += '<td>' + this.mhs[i] + '</td>';
                data += '</tr>';
            }
        }
        return this.el.innerHTML = data;
    };
    this.Add = function(){
        // untuk fungsi Add (onsubmit)
    }
    this.Count = function(){
        var el = document.getElementById('counter');
        if(data){
            el.innerHTML = data + ' ' + 'Mahasiswa';
        } else {
            el.innerHTML = 'No' + 'Mahasiswa';
        }
    };
}
apl.barisAll();