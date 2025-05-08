var wms_layers = [];


        var lyr_MapzenGlobalTerrain_0 = new ol.layer.Tile({
            'title': 'Mapzen Global Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_aphn_2 = new ol.format.GeoJSON();
var features_aphn_2 = format_aphn_2.readFeatures(json_aphn_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aphn_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aphn_2.addFeatures(features_aphn_2);
var lyr_aphn_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aphn_2, 
                style: style_aphn_2,
                popuplayertitle: 'Địa phận',
                interactive: true,
                title: '<img src="styles/legend/aphn_2.png" /> Địa phận'
            });
var format_RG_line_3 = new ol.format.GeoJSON();
var features_RG_line_3 = format_RG_line_3.readFeatures(json_RG_line_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RG_line_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RG_line_3.addFeatures(features_RG_line_3);
var lyr_RG_line_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RG_line_3, 
                style: style_RG_line_3,
                popuplayertitle: 'RG_line',
                interactive: true,
                title: '<img src="styles/legend/RG_line_3.png" /> RG_line'
            });
var format_Tienichkhac_4 = new ol.format.GeoJSON();
var features_Tienichkhac_4 = format_Tienichkhac_4.readFeatures(json_Tienichkhac_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tienichkhac_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tienichkhac_4.addFeatures(features_Tienichkhac_4);
var lyr_Tienichkhac_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tienichkhac_4, 
                style: style_Tienichkhac_4,
                popuplayertitle: 'Tienichkhac',
                interactive: true,
    title: 'Tienichkhac<br />\
    <img src="styles/legend/Tienichkhac_4_0.png" /> Ngân hàng<br />\
    <img src="styles/legend/Tienichkhac_4_1.png" /> Quầy thuốc<br />\
    <img src="styles/legend/Tienichkhac_4_2.png" /> Siêu thị<br />\
    <img src="styles/legend/Tienichkhac_4_3.png" /> Taxi<br />\
    <img src="styles/legend/Tienichkhac_4_4.png" /> Trạm xăng dầu<br />' });
var format_NhaHang_Anuong_5 = new ol.format.GeoJSON();
var features_NhaHang_Anuong_5 = format_NhaHang_Anuong_5.readFeatures(json_NhaHang_Anuong_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NhaHang_Anuong_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NhaHang_Anuong_5.addFeatures(features_NhaHang_Anuong_5);
var lyr_NhaHang_Anuong_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NhaHang_Anuong_5, 
                style: style_NhaHang_Anuong_5,
                popuplayertitle: 'NhaHang_Anuong',
                interactive: true,
                title: '<img src="styles/legend/NhaHang_Anuong_5.png" /> NhaHang_Anuong'
            });
var format_Nhanghi_KS_6 = new ol.format.GeoJSON();
var features_Nhanghi_KS_6 = format_Nhanghi_KS_6.readFeatures(json_Nhanghi_KS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nhanghi_KS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nhanghi_KS_6.addFeatures(features_Nhanghi_KS_6);
var lyr_Nhanghi_KS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nhanghi_KS_6, 
                style: style_Nhanghi_KS_6,
                popuplayertitle: 'Nhanghi_KS',
                interactive: true,
                title: '<img src="styles/legend/Nhanghi_KS_6.png" /> Nhanghi_KS'
            });
var format_DanhlamthngcnhChLinh_7 = new ol.format.GeoJSON();
var features_DanhlamthngcnhChLinh_7 = format_DanhlamthngcnhChLinh_7.readFeatures(json_DanhlamthngcnhChLinh_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DanhlamthngcnhChLinh_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DanhlamthngcnhChLinh_7.addFeatures(features_DanhlamthngcnhChLinh_7);
var lyr_DanhlamthngcnhChLinh_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DanhlamthngcnhChLinh_7, 
                style: style_DanhlamthngcnhChLinh_7,
                popuplayertitle: 'Danh lam thắng cảnh - Chí Linh',
                interactive: true,
                title: '<img src="styles/legend/DanhlamthngcnhChLinh_7.png" /> Danh lam thắng cảnh - Chí Linh'
            });

lyr_MapzenGlobalTerrain_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_aphn_2.setVisible(true);lyr_RG_line_3.setVisible(false);lyr_Tienichkhac_4.setVisible(true);lyr_NhaHang_Anuong_5.setVisible(true);lyr_Nhanghi_KS_6.setVisible(true);lyr_DanhlamthngcnhChLinh_7.setVisible(true);
var layersList = [lyr_MapzenGlobalTerrain_0,lyr_OSMStandard_1,lyr_aphn_2,lyr_RG_line_3,lyr_Tienichkhac_4,lyr_NhaHang_Anuong_5,lyr_Nhanghi_KS_6,lyr_DanhlamthngcnhChLinh_7];
lyr_aphn_2.set('fieldAliases', {'FID': 'FID', 'Ten': 'Phường/Xã', });
lyr_RG_line_3.set('fieldAliases', {'FID': 'FID', 'Ten': 'Ten', });
lyr_Tienichkhac_4.set('fieldAliases', {'STT': 'STT', 'Vido': 'Vido', 'Kinhdo': 'Kinhdo', 'ID_DVKD': 'ID_DVKD', 'Ten_DVKD': 'Ten_DVKD', 'Dia_chi': 'Dia_chi', 'Hinh_thuc_': 'Hinh_thuc_', 'Ten_nganh_': 'Ten_nganh_', 'Phan_loai': 'Phan_loai', 'SDT': 'SDT', });
lyr_NhaHang_Anuong_5.set('fieldAliases', {'STT': 'STT', 'Vido': 'Vido', 'Kinhdo': 'Kinhdo', 'ID_DVKD': 'ID_DVKD', 'Ten_DVKD': 'Ten_DVKD', 'Dia_chi': 'Dia_chi', 'Hinh_thuc_': 'Hinh_thuc_', 'Ten_nganh_': 'Ten_nganh_', 'Phan_loai': 'Phan_loai', 'SDT': 'SDT', });
lyr_Nhanghi_KS_6.set('fieldAliases', {'STT': 'STT', 'Vido': 'Vido', 'Kinhdo': 'Kinhdo', 'ID_DVKD': 'ID_DVKD', 'Ten_DVKD': 'Ten_DVKD', 'Dia_chi': 'Dia_chi', 'Hinh_thuc_': 'Hinh_thuc_', 'Ten_nganh_': 'Ten_nganh_', 'Phan_loai': 'Phan_loai', 'SDT': 'SDT', });
lyr_DanhlamthngcnhChLinh_7.set('fieldAliases', {'TENDITICH': 'Tên di tích', 'VIDO': 'Vĩ độ', 'KINHDO': 'Kinh độ', 'THUOCTINH': 'Xếp hạng', 'photos': 'Hình ảnh', 'id': 'id', 'MaAnh': 'MaAnh', 'DiaChi': 'DiaChi', });
lyr_aphn_2.set('fieldImages', {'FID': 'Hidden', 'Ten': 'TextEdit', });
lyr_RG_line_3.set('fieldImages', {'FID': 'Hidden', 'Ten': 'Hidden', });
lyr_Tienichkhac_4.set('fieldImages', {'STT': 'Hidden', 'Vido': 'Hidden', 'Kinhdo': 'Hidden', 'ID_DVKD': 'Hidden', 'Ten_DVKD': 'TextEdit', 'Dia_chi': 'TextEdit', 'Hinh_thuc_': 'Hidden', 'Ten_nganh_': 'TextEdit', 'Phan_loai': 'TextEdit', 'SDT': 'TextEdit', });
lyr_NhaHang_Anuong_5.set('fieldImages', {'STT': 'Hidden', 'Vido': 'Hidden', 'Kinhdo': 'Hidden', 'ID_DVKD': 'Hidden', 'Ten_DVKD': 'TextEdit', 'Dia_chi': 'TextEdit', 'Hinh_thuc_': 'Hidden', 'Ten_nganh_': 'TextEdit', 'Phan_loai': 'TextEdit', 'SDT': 'TextEdit', });
lyr_Nhanghi_KS_6.set('fieldImages', {'STT': 'Hidden', 'Vido': 'Hidden', 'Kinhdo': 'Hidden', 'ID_DVKD': 'Hidden', 'Ten_DVKD': 'TextEdit', 'Dia_chi': 'TextEdit', 'Hinh_thuc_': 'Hidden', 'Ten_nganh_': 'TextEdit', 'Phan_loai': 'TextEdit', 'SDT': 'TextEdit', });
lyr_DanhlamthngcnhChLinh_7.set('fieldImages', {'TENDITICH': 'TextEdit', 'VIDO': 'Hidden', 'KINHDO': 'Hidden', 'THUOCTINH': 'TextEdit', 'photos': 'ExternalResource', 'id': 'Hidden', 'MaAnh': 'Hidden', 'DiaChi': 'Hidden', });
lyr_aphn_2.set('fieldLabels', {'Ten': 'inline label - visible with data', });
lyr_RG_line_3.set('fieldLabels', {});
lyr_Tienichkhac_4.set('fieldLabels', {'Ten_DVKD': 'inline label - always visible', 'Dia_chi': 'inline label - always visible', 'Ten_nganh_': 'inline label - always visible', 'Phan_loai': 'inline label - always visible', 'SDT': 'inline label - always visible', });
lyr_NhaHang_Anuong_5.set('fieldLabels', {'Ten_DVKD': 'inline label - always visible', 'Dia_chi': 'inline label - always visible', 'Ten_nganh_': 'inline label - always visible', 'Phan_loai': 'inline label - always visible', 'SDT': 'inline label - always visible', });
lyr_Nhanghi_KS_6.set('fieldLabels', {'Ten_DVKD': 'inline label - always visible', 'Dia_chi': 'inline label - always visible', 'Ten_nganh_': 'inline label - always visible', 'Phan_loai': 'inline label - always visible', 'SDT': 'inline label - always visible', });
lyr_DanhlamthngcnhChLinh_7.set('fieldLabels', {'TENDITICH': 'inline label - always visible', 'THUOCTINH': 'inline label - always visible', 'photos': 'inline label - always visible', });
lyr_DanhlamthngcnhChLinh_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});