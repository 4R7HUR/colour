let file_names = {}; // Use curly braces {} to define an object, not square brackets []
file_names['B'] = ['1709485302816.png', '1709485336196.png', '1709485341748.png', '1709485385831.png', '1709485391819.png', '1709485402810.png', '1709485408200.png', '1709485413869.png', '1709485419810.png', '1709485443292.png', '1709485454154.png', '1709485488798.png', '1709485511341.png', '1709485544709.png', '1709485550047.png', '1709485561074.png', '1709485567996.png', '1709485579235.png', '1709485600727.png', '1709485617963.png', '1709485634831.png', '1709485640192.png', '1709485646123.png', '1709485657765.png', '1709485673905.png', '1709485679522.png', '1709485702472.png', '1709485713432.png', '1709485730431.png', '1709485735999.png', '1709485753246.png', '1709485775591.png', '1709485786734.png', '1709485798322.png', '1709485822476.png', '1709485834195.png', '1709485863024.png', '1709485893082.png', '1709485898712.png', '1709485909752.png', '1709485954132.png', '1709485970477.png', '1709485975995.png', '1709485981423.png', '1709486038035.png', '1709486043487.png', '1709486054244.png', '1709486066111.png', '1709486077177.png', '1709486123214.png', '1709486181964.png', '1709486203503.png', '1709486214156.png', '1709486230824.png', '1709486269517.png', '1709486337408.png', '1709486383981.png', '1709486389457.png', '1709486406541.png', '1709486433904.png', '1709486439469.png', '1709486451017.png', '1709486462653.png', '1709486478803.png', '1709486512078.png', '1709486552104.png', '1709486732687.png', '1709486748946.png', '1709486765334.png', '1709486787536.png', '1709486921366.png', '1709486932096.png', '1709486977489.png', '1709486982910.png', '1709487011008.png', '1709487016385.png', '1709487021819.png', '1709487027184.png', '1709487037901.png', '1709487049229.png', '1709487054986.png', '1709487060588.png', '1709487065964.png', '1709487076900.png', '1709487145198.png', '1709487150768.png', '1709487156194.png', '1709487161578.png', '1709487185175.png', '1709487190565.png', '1709487196095.png', '1709487219439.png', '1709487230762.png', '1709487236210.png', '1709487241669.png', '1709487257779.png', '1709487263176.png', '1709487268650.png', '1709487280473.png', '1709487298487.png', '1709487309906.png', '1709487320796.png', '1709487326208.png', '1709487331749.png', '1709487337068.png', '1709487377355.png', '1709487404924.png', '1709487415900.png', '1709487421314.png', '1709487432890.png', '1709487450690.png', '1709487462110.png', '1709487467693.png', '1709487473720.png', '1709487484810.png', '1709487490193.png', '1709487495634.png', '1709487524636.png', '1709487541672.png', '1709487552655.png', '1709487558039.png', '1709487564062.png', '1709487569758.png', '1709487599776.png', '1709487605161.png', '1709487610751.png', '1709487638975.png', '1709487644390.png', '1709487649800.png', '1709487655263.png', '1709487660793.png', '1709487666229.png', '1709487683342.png', '1709487694256.png', '1709487699610.png', '1709487705528.png', '1709487718093.png', '1709487723692.png', '1709487729136.png', '1709487753299.png', '1709487769991.png', '1709487775561.png', '1709487795141.png', '1709487800652.png', '1709487805950.png', '1709487811250.png', '1709487816574.png', '1709487827292.png'];
file_names['A'] = ['1709335229886.png', '1709335232302.png', '1709335234795.png', '1709335237171.png', '1709335239678.png', '1709335242038.png', '1709335244820.png', '1709335247331.png', '1709335249760.png', '1709335252169.png', '1709335254619.png', '1709335257255.png', '1709335259707.png', '1709335261987.png', '1709335264296.png', '1709335266609.png', '1709335269122.png', '1709335272044.png', '1709335274546.png', '1709335277085.png', '1709335279424.png', '1709335281807.png', '1709335284201.png', '1709335286764.png', '1709335289270.png', '1709335291817.png', '1709335294278.png', '1709335296749.png', '1709335299261.png', '1709335301775.png', '1709335304327.png', '1709335306854.png', '1709335309325.png', '1709335312441.png', '1709335314847.png', '1709335317535.png', '1709335320036.png', '1709335322414.png', '1709335324969.png', '1709335327345.png', '1709335329885.png', '1709335332326.png', '1709335334707.png', '1709335337044.png', '1709335339366.png', '1709335341805.png', '1709335344271.png', '1709335346571.png', '1709335348871.png', '1709335351146.png', '1709335353966.png', '1709335356377.png', '1709335358751.png', '1709335361306.png', '1709335363704.png', '1709335366145.png', '1709335368595.png', '1709335370901.png', '1709335373277.png', '1709335375680.png', '1709335377989.png', '1709335380322.png', '1709335382625.png', '1709335384947.png', '1709335387794.png', '1709335390384.png', '1709335392772.png', '1709335395062.png', '1709335397373.png', '1709335399649.png', '1709335401939.png', '1709335404315.png', '1709335406652.png', '1709335409056.png', '1709335411520.png', '1709335413971.png', '1709335416296.png', '1709335418641.png', '1709335420961.png', '1709335423302.png', '1709335425657.png', '1709335427979.png', '1709335430311.png', '1709335432661.png', '1709335435227.png', '1709335437548.png', '1709335439845.png', '1709335442115.png', '1709335444443.png', '1709335446742.png', '1709335449045.png', '1709335451350.png', '1709335453665.png', '1709335456107.png', '1709335458581.png', '1709335460905.png', '1709335463752.png', '1709335466272.png', '1709335468788.png', '1709335471224.png', '1709335473643.png', '1709335476540.png', '1709335479623.png', '1709335482061.png', '1709335484461.png', '1709335486957.png', '1709335489435.png', '1709335491791.png', '1709335494185.png', '1709335496529.png', '1709335498858.png', '1709335501156.png', '1709335503471.png', '1709335505745.png', '1709335508066.png', '1709335510613.png', '1709335512938.png', '1709335515367.png', '1709335517664.png', '1709335519967.png', '1709335522262.png', '1709335524589.png', '1709335526892.png', '1709335529303.png', '1709335531650.png', '1709335534152.png', '1709335536463.png', '1709335538782.png', '1709335541053.png', '1709335543884.png', '1709335546339.png', '1709335548675.png', '1709335551037.png', '1709335553359.png', '1709335555748.png', '1709335558095.png', '1709335560468.png', '1709335562789.png', '1709335565117.png', '1709335567521.png', '1709335569834.png', '1709335572189.png', '1709335574517.png', '1709335576924.png', '1709335579203.png', '1709335581540.png', '1709335584316.png', '1709335586749.png', '1709335589064.png', '1709335591335.png', '1709335593635.png', '1709335595904.png', '1709335598257.png', '1709335600579.png', '1709335602961.png', '1709335605431.png', '1709335607913.png', '1709335610212.png', '1709335612585.png', '1709335615022.png', '1709335617376.png', '1709335619708.png', '1709335622028.png', '1709335624346.png', '1709335626665.png', '1709335629031.png', '1709335631395.png', '1709335633865.png', '1709335636172.png', '1709335638472.png', '1709335640794.png', '1709335643107.png', '1709335645530.png', '1709335647927.png', '1709335650275.png', '1709335652633.png', '1709335655252.png', '1709335657601.png', '1709335660120.png', '1709335662401.png', '1709335664847.png', '1709335667262.png', '1709335669611.png', '1709335671934.png', '1709335674314.png', '1709335676837.png', '1709335679239.png', '1709335681665.png', '1709335684205.png', '1709335686539.png', '1709335688902.png', '1709335691252.png', '1709335693653.png', '1709335696023.png', '1709335698517.png', '1709335701010.png', '1709335703391.png', '1709335705789.png', '1709335708161.png', '1709335710613.png', '1709335713047.png', '1709335715726.png', '1709335718074.png', '1709335720546.png', '1709335722891.png', '1709335725295.png', '1709335727624.png', '1709335730243.png', '1709335732635.png', '1709335734934.png', '1709335737248.png', '1709335739641.png', '1709335741941.png', '1709335744245.png', '1709335746561.png', '1709335748878.png', '1709335751289.png', '1709335753806.png', '1709335756424.png', '1709335758801.png', '1709335761241.png', '1709335764410.png', '1709335767666.png', '1709335770356.png', '1709335772998.png', '1709335775762.png', '1709335778151.png', '1709335781398.png', '1709335785331.png', '1709335787973.png', '1709335791365.png', '1709335794439.png', '1709335797793.png', '1709335801088.png', '1709335804254.png', '1709335807521.png', '1709335810780.png', '1709335814084.png', '1709335817897.png', '1709335820578.png', '1709335823720.png', '1709335826049.png', '1709335829210.png', '1709335832576.png', '1709335835789.png', '1709335839067.png', '1709335842318.png', '1709335845463.png', '1709335847764.png', '1709335851107.png', '1709335854261.png', '1709335856595.png', '1709335858879.png', '1709335861218.png', '1709335864397.png', '1709335867564.png', '1709335869958.png', '1709335873125.png', '1709335876406.png', '1709335878705.png', '1709335882096.png', '1709335885271.png', '1709335887608.png', '1709335889914.png', '1709335892220.png', '1709335895429.png', '1709335898606.png', '1709335901801.png', '1709335905174.png', '1709335908375.png', '1709335911653.png', '1709335913963.png', '1709335917282.png', '1709335920568.png', '1709335923704.png', '1709335926976.png', '1709335930208.png', '1709335933409.png', '1709335935697.png', '1709335938049.png', '1709335941245.png', '1709335943541.png', '1709335946757.png', '1709335950611.png', '1709335953222.png', '1709335956415.png', '1709335959663.png', '1709335962929.png', '1709335966215.png', '1709335968535.png', '1709335970806.png', '1709335974021.png', '1709335977344.png', '1709335979672.png', '1709335982928.png', '1709335986205.png', '1709335989399.png', '1709335992589.png', '1709335995785.png', '1709335999080.png', '1709336002379.png', '1709336005556.png', '1709336007832.png', '1709336010085.png', '1709336013350.png', '1709336016569.png', '1709336018853.png', '1709336021125.png', '1709336024440.png', '1709336026707.png', '1709336029016.png', '1709336032682.png', '1709336035994.png', '1709336038816.png', '1709336041263.png', '1709336044344.png', '1709336047525.png', '1709336049819.png', '1709336053184.png', '1709336056288.png', '1709336058570.png', '1709336061886.png', '1709336065197.png', '1709336068577.png', '1709336070868.png', '1709336074063.png', '1709336076354.png', '1709336079204.png', '1709336081880.png', '1709336085097.png', '1709336088306.png', '1709336091533.png', '1709336093824.png', '1709336096096.png', '1709336098354.png', '1709336101645.png', '1709336104882.png', '1709336107338.png', '1709336110422.png', '1709336113663.png', '1709336117090.png', '1709336120274.png', '1709336123593.png', '1709336126756.png', '1709336129167.png', '1709336132293.png', '1709336135474.png', '1709336137759.png', '1709336140181.png', '1709336143346.png', '1709336146506.png', '1709336149680.png', '1709336153006.png', '1709336155319.png', '1709336158673.png', '1709336161901.png', '1709336164197.png', '1709336166513.png', '1709336169920.png', '1709336173083.png', '1709336176244.png', '1709336179488.png', '1709336181821.png', '1709336184123.png', '1709336187456.png', '1709336190770.png', '1709336194124.png', '1709336197250.png', '1709336200236.png', '1709336202818.png', '1709336205985.png', '1709336208262.png', '1709336211638.png', '1709336214821.png', '1709336217101.png', '1709336220406.png', '1709336223627.png', '1709336226868.png', '1709336230071.png', '1709336233310.png', '1709336236611.png', '1709336239887.png', '1709336243159.png', '1709336246419.png', '1709336248758.png', '1709336252062.png', '1709336254316.png', '1709336256595.png', '1709336259763.png', '1709336263030.png', '1709336266151.png', '1709336268488.png', '1709336271816.png', '1709336275161.png', '1709336278325.png', '1709336280631.png', '1709336283950.png', '1709336287199.png', '1709336290484.png', '1709336293950.png', '1709336296909.png', '1709336300095.png', '1709336303303.png', '1709336306569.png', '1709336308872.png', '1709336312227.png', '1709336315375.png', '1709336317737.png', '1709336320957.png', '1709336324245.png', '1709336327385.png', '1709336330566.png', '1709336333778.png', '1709336336959.png', '1709336339290.png', '1709336342759.png', '1709336345815.png', '1709336349127.png', '1709336351423.png', '1709336354614.png', '1709336356938.png', '1709336360322.png', '1709336363529.png', '1709336366853.png', '1709336370173.png', '1709336372500.png', '1709336374781.png', '1709336378033.png', '1709336381371.png', '1709336383732.png', '1709336387007.png', '1709336389363.png', '1709336392602.png', '1709336394935.png', '1709336398162.png', '1709336400466.png', '1709336402771.png', '1709336406099.png', '1709336409355.png', '1709336412686.png', '1709336417605.png', '1709336420142.png', '1709336423364.png', '1709336426532.png', '1709336429761.png', '1709336432934.png', '1709336435213.png', '1709336437528.png', '1709336440717.png', '1709336443913.png', '1709336447219.png', '1709336450419.png', '1709336452740.png', '1709336455032.png', '1709336457342.png', '1709336460622.png', '1709336463992.png', '1709336467155.png', '1709336470577.png', '1709336473804.png', '1709336477219.png', '1709336480358.png', '1709336482685.png', '1709336486283.png', '1709336489072.png', '1709336492232.png', '1709336495614.png', '1709336499127.png', '1709336502221.png', '1709336506634.png', '1709336509074.png', '1709336512208.png', '1709336515585.png', '1709336518811.png', '1709336522144.png', '1709336525353.png', '1709336528628.png', '1709336531836.png', '1709336535125.png', '1709336538772.png', '1709336541650.png', '1709336544841.png', '1709336548049.png', '1709336551293.png', '1709336554587.png', '1709336557846.png', '1709336561176.png', '1709336564285.png', '1709336567701.png', '1709336570833.png', '1709336574160.png', '1709336577516.png', '1709336581927.png', '1709336584357.png', '1709336587656.png', '1709336591488.png', '1709336594069.png', '1709336597844.png', '1709336600656.png', '1709336603973.png', '1709336607063.png', '1709336609909.png', '1709336612469.png', '1709336615263.png', '1709336617902.png', '1709336620302.png', '1709336622685.png', '1709336625098.png', '1709336627524.png', '1709336630115.png', '1709336632473.png', '1709336634907.png', '1709336637391.png', '1709336639851.png', '1709336642219.png', '1709336644786.png', '1709336647443.png', '1709336649939.png', '1709336652540.png', '1709336654945.png', '1709336657422.png', '1709336659843.png', '1709336662336.png', '1709336664814.png', '1709336667381.png', '1709336670002.png', '1709336672435.png', '1709336674852.png', '1709336677379.png', '1709336679803.png', '1709336682246.png', '1709336684593.png', '1709336686912.png', '1709336689276.png', '1709336691635.png', '1709336694052.png', '1709336697005.png', '1709336699626.png', '1709336702106.png', '1709336704516.png', '1709336706900.png', '1709336709279.png', '1709336711593.png', '1709336713931.png', '1709336716254.png', '1709336718581.png', '1709336720938.png', '1709336723284.png', '1709336725611.png', '1709336727934.png', '1709336730261.png', '1709336732620.png', '1709336734954.png', '1709336737333.png', '1709336739650.png', '1709336742015.png', '1709336744355.png', '1709336746729.png', '1709336749018.png', '1709336751393.png', '1709336753695.png', '1709336756008.png', '1709336758333.png', '1709336760636.png', '1709336762957.png', '1709336765324.png', '1709336767677.png', '1709336770008.png', '1709336772319.png', '1709336774641.png', '1709336776938.png', '1709336779257.png', '1709336781549.png', '1709336783987.png', '1709336786286.png', '1709336788591.png', '1709336793112.png', '1709336795563.png', '1709336798090.png', '1709336800439.png', '1709336802774.png', '1709336805138.png', '1709336807557.png', '1709336810695.png', '1709336813115.png', '1709336815607.png', '1709336818310.png', '1709336820682.png', '1709336823066.png', '1709336825760.png', '1709336828201.png', '1709336830649.png', '1709336833069.png', '1709336835419.png', '1709336837759.png', '1709336840146.png', '1709336842559.png', '1709336844925.png', '1709336847335.png', '1709336849738.png', '1709336852167.png', '1709336854597.png', '1709336857042.png', '1709336859676.png', '1709336862017.png', '1709336864482.png'];
file_names['05-needs work'] = ['1636652618.png', '1636652791.png', '1636652826.png', '1636652885.png', '1636652898.png', '1636652929.png', '1636652970.png', '1636652992.png', '1636653026.png', '1636653066.png', '1636653119.png', '1636653677.png', '1636653742.png', '1636653815.png', '1636653837.png', '1636653916.png', '1636653956.png', '1636653960.png', '1636654021.png', '1636654041.png', '1636654097.png', '1636654104.png', '1636654125.png', '1636654140.png', '1636654144.png', '1636654168.png', '1636654180.png', '1636654226.png', '1636654259.png', '1636654291.png', '1636654322.png', '1636654331.png', '1636654361.png', '1636654398.png', '1636654411.png', '1636654426.png', '1636654460.png', '1636654554.png', '1636654566.png', '1636654573.png', '1636654626.png', '1636661363.png', '1636661383.png', '1636661465.png', '1636661492.png', '1636661518.png', '1636661587.png', '1636661636.png', '1636661683.png', '1636661733.png', '1636661736.png', '1636661781.png', '1636661795.png', '1636661805.png', '1636661822.png', '1636661823.png', '1636661828.png', '1636668929.png', '1636669040.png', '1636669048.png', '1636669071.png', '1636669120.png', '1636669217.png', '1636669259.png', '1636669309.png', '1636669353.png', '1636669406.png', '1636669435.png', '1636669449.png', '1636669616.png', '1636669688.png', '1636669823.png', '1636670059.png', '1636670096.png', '1636670211.png', '1636670715.png', '1636670791.png', '1636671796.png', '1636671837.png', '1636671961.png', '1636672654.png', '1636673060.png', '1636673161.png', '1636673185.png', '1636673257.png', '1636673289.png', '1636673314.png', '1636673345.png', '1636673473.png', '1636673542.png', '1636674225.png', '1636674329.png', '1636675056.png', '1636675196.png', '1636675226.png', '1636675268.png', '1636675301.png', '1636675415.png', '1636675443.png', '1636675479.png', '1636675619.png', '1636675827.png', '1636675887.png', '1636675953.png', '1636675984.png', '1636675997.png', '1636676010.png', '1636676524.png', '1636676653.png', '1636739296.png', '1636757162.png', '1636757197.png', '1636757210.png', '1636757221.png', '1636757247.png', '1636757284.png', '1636757302.png', '1636757322.png'];
file_names['05'] = ['1636934927.png', '1636934948.png', '1636934964.png', '1636935007.png', '1636935052.png', '1636935071.png', '1636935105.png', '1636960010.png', '1636960026.png', '1636960064.png', '1636960213.png', '1636960233.png', '1636960250.png', '1636960268.png', '1636960335.png', '1636960356.png', '1636960392.png', '1636962413.png', '1637003321.png', '1637005028.png', '1637005124.png', '1637005161.png', '1637005171.png', '1637005217.png', '1637005268.png', '1637005284.png', '1637005301.png', '1637005325.png', '1637008365.png', '1637008723.png', '1637008844.png', '1637009929.png', '1637010102.png', '1637010794.png', '1637010997.png', '1637011042.png', '1637011134.png', '1637011342.png', '1637011365.png', '1637011504.png', '1637011671.png', '1637011687.png', '1637011722.png', '1637011759.png', '1637011820.png', '1637011864.png', '1637011908.png', '1637011918.png', '1637020356.png', '1637020434.png', '1637020498.png', '1637020535.png', '1637020553.png', '1637020601.png', '1637020620.png', '1637020630.png', '1637096918.png', '1637096946.png', '1637097076.png', '1637097323.png', '1637357352.png', '1637357424.png', '1637358415.png', '1637358459.png', '1637358577.png', '1637359645.png', '1637359810.png'];
file_names['03'] = ['1580632093.png', '1580632169.png', '1580632193.png', '1580632290.png', '1580632406.png', '1580632442.png', '1580632472.png', '1580632560.png', '1580632600.png', '1580632623.png', '1580632773.png', '1580632800.png', '1580632836.png', '1580632931.png', '1580632939.png', '1580632947.png', '1580632953.png', '1580632972.png', '1580633017.png', '1580633051.png', '1580633070.png', '1580633120.png', '1580633200.png', '1580633226.png', '1580633315.png', '1580633347.png', '1580633354.png', '1580633412.png', '1580633456.png', '1580633483.png', '1580633511.png', '1580633523.png', '1580633536.png', '1580633560.png', '1580633563.png', '1580633613.png', '1580633617.png', '1580633631.png', '1580633634.png', '1580633687.png', '1580633707.png', '1580633710.png', '1580633768.png', '1580633772.png', '1580633807.png', '1580633827.png', '1580633836.png', '1580633855.png', '1580633891.png', '1580633916.png', '1580633917.png', '1580633933.png', '1580633937.png', '1580633959.png', '1580633978.png', '1580633982.png', '1580633993.png', '1580634027.png', '1580634039.png', '1580634072.png', '1580634073.png', '1580643028.png', '1580643068.png', '1580643108.png', '1580643117.png', '1580643125.png', '1580643140.png', '1580643149.png', '1580643153.png', '1580643161.png','1580643479.png', '1580643491.png', '1580643504.png', '1580643514.png', '1580643700.png', '1580643706.png', '1580643728.png', '1580643792.png', '1580643801.png', '1580643806.png', '1580643822.png', '1580643855.png', '1580643879.png', '1580643906.png', '1580643937.png', '1580643978.png', '1580643993.png', '1580644009.png', '1580644018.png', '1580644033.png', '1580644054.png', '1580644066.png', '1580644134.png', '1580644147.png', '1580644160.png', '1580644199.png', '1580644204.png', '1580644218.png', '1580644224.png', '1580644229.png', '1580644240.png', '1580644275.png', '1580644295.png', '1580644349.png', '1580670059.png', '1580670112.png', '1580670113.png', '1580670145.png', '1580670193.png', '1580670971.png', '1580671001.png', '1580671026.png', '1580671059.png', '1580671129.png', '1580671198.png', '1580672348.png', '1580672536.png', '1580672551.png', '1580672605.png', '1580672606.png', '1600248424835.png', '1600250132156.png', '1600250163862.png', '1600250186682.png', '1600250259968.png', '1600250290694.png', '1600250316301.png', '1600250388788.png', '1600250399034.png', '1600250450668.png', '1600953932250.png', '1601211144538.png', '1601480189846.png', '1601480204050.png', '1601480217323.png', '1601480229245.png', '1601480242629.png', '1605458476388.png', '1620649999300.png', '1620649999300-is.png', '1620650007558.png', '1620650007558-is.png', '1620650012130.png', '1620650012130-is.png', '1620650018157.png', '1620650018157-is.png', '1620650022594.png', '1620650022594-is.png', '1617186375590.png', '1617290523954.png', '1617460384830.png', '1626967920689.png'];
file_names['02'] = ['1569873332.png', '1569953412.png', '1569953432.png', '1569953469.png', '1570180645.png', '1570180673.png', '1570180677.png', '1570180684.png', '1570180774.png', '1570181499.png', '1570181532.png', '1570181559.png', '1570181563.png', '1570181574.png', '1570181580.png', '1570184010.png', '1570184600.png', '1570184673.png', '1570184722.png', '1570184854.png', '1570184903.png', '1570185326.png', '1570185329.png', '1570185475.png', '1570185525.png', '1570185623.png', '1570185850.png', '1570185907.png', '1570185928.png', '1570185936.png', '1570186040.png', '1570186046.png', '1570186468.png', '1570186515.png', '1570186771.png', '1570187023.png', '1570187060.png', '1570187350.png', '1570201745.png', '1570201964.png', '1570201975.png', '1570202313.png', '1570202427.png', '1570202601.png', '1570202682.png', '1570202703.png', '1570203147.png', '1570203346.png', '1570203479.png', '1570203508.png', '1570203539.png', '1570203567.png', '1570203747.png', '1570203861.png', '1570203893.png', '1570203901.png', '1570203931.png', '1570203938.png', '1570203956.png', '1570204055.png', '1570204077.png', '1570204084.png', '1570204137.png', '1570204157.png', '1570204247.png', '1570204623.png', '1570204685.png', '1570204704.png', '1570204730.png', '1570204852.png', '1570205148.png', '1570253832.png', '1570254506.png', '1570254615.png', '1570254669.png', '1570254746.png', '1570254778.png', '1570255018.png', '1570255035.png', '1570255060.png', '1570255086.png', '1570255126.png', '1570255131.png', '1570255150.png', '1570255159.png', '1570255214.png', '1570255234.png', '1570255252.png', '1570255270.png', '1570255936.png', '1570256000.png', '1570256019.png', '1570256032.png', '1570256237.png', '1570256250.png', '1570256258.png', '1570256264.png', '1570256268.png', '1570256279.png', '1570256287.png', '1570256301.png', '1570256320.png', '1570256451.png', '1570256497.png', '1570256576.png', '1570256651.png', '1570256794.png', '1570256824.png', '1570256893.png', '1570256957.png', '1570257021.png', '1570257036.png', '1570257050.png', '1570257081.png', '1570257087.png', '1570257091.png', '1570257109.png', '1570257152.png', '1570257204.png', '1570257252.png', '1570257257.png', '1570257284.png', '1570257411.png', '1570257440.png', '1570257449.png', '1570257560.png', '1570257584.png', '1570257609.png', '1570257635.png', '1570257642.png', '1570257654.png', '1570257660.png', '1570257671.png', '1570257822.png', '1570257830.png', '1570258144.png', '1571389533.png', '1571415287.png', '1571415655.png', '1571415915.png', '1571415962.png', '1571415986.png', '1571416091.png', '1571416359.png', '1571416373.png', '1571416414.png', '1571416486.png', '1571416510.png', '1571416572.png', '1571416606.png', '1571416621.png', '1571416749.png', '1571417153.png', '1571417168.png', '1571417353.png', '1571417477.png', '1571417512.png', '1571417814.png', '1571417820.png', '1571417898.png', '1571417908.png', '1571417918.png', '1571417973.png', '1571419003.png', '1571419012.png', '1571419047.png', '1571419076.png', '1571419134.png', '1571419145.png', '1571419156.png', '1571419251.png', '1571419306.png', '1571419433.png', '1571419442.png', '1571419461.png', '1571419501.png', '1571419649.png', '1571419662.png', '1571419686.png', '1571419688.png', '1571419689.png', '1571419756.png', '1571419775.png', '1571419807.png', '1571419812.png', '1571419861.png', '1571419897.png', '1571419906.png', '1571419946.png', '1571420885.png', '1571420907.png', '1571420944.png', '1571420965.png', '1571420977.png', '1571421049.png', '1571421070.png', '1571421361.png', '1571421395.png', '1571421414.png', '1571421455.png', '1571421473.png', '1571421665.png', '1571421733.png', '1571421742.png', '1571421814.png', '1571421838.png', '1571421851.png', '1571422002.png', '1571422038.png', '1571422126.png', '1571422368.png', '1571422453.png', '1571422874.png', '1571422934.png', '1571422945.png', '1571422976.png', '1571423043.png', '1571423291.png', '1571423359.png', '1571423379.png', '1571423386.png', '1571423399.png', '1571423411.png', '1571423444.png', '1571423466.png', '1571423473.png', '1571423490.png', '1571423515.png', '1571423626.png', '1571423633.png', '1571423695.png', '1571423712.png', '1571423908.png', '1571424092.png', '1571424120.png', '1571424148.png', '1571424179.png', '1571424197.png', '1571424216.png', '1571424235.png', '1571424244.png', '1571424250.png', '1571424264.png', '1571424560.png']
file_names['C'] = ['1710375789414.png','1710375800046.png','1710375805221.png','1710375816172.png','1710375821422.png','1710375832206.png','1710375837390.png','1710375847884.png','1710375853057.png','1710375869120.png','1710375895554.png','1710375921574.png','1710375926781.png','1710375947570.png','1710375953060.png','1710375963822.png','1710375984770.png','1710375995097.png','1710376000316.png','1710376027118.png','1710376048193.png','1710376053413.png','1710376058623.png'];

var Hide03 = [
    //'1580632093.png', '1580632169.png', '1580632193.png', '1580632290.png', '1580632406.png',
    '1580632442.png', '1580632472.png', '1580632560.png', '1580632600.png', '1580632623.png',
    '1580632773.png', '1580632800.png', '1580632836.png', '1580632931.png', '1580632939.png',
    '1580632947.png', '1580632953.png', '1580632972.png', '1580633017.png', '1580633051.png',
    '1580633070.png', '1580633120.png', '1580633200.png', '1580633226.png', '1580633315.png',
    '1580633347.png', '1580633354.png', '1580633412.png', '1580633456.png', '1580633483.png',
    //'1580633511.png', '1580633523.png', '1580633536.png', '1580633560.png', '1580633563.png',
    //'1580633613.png', '1580633617.png', '1580633631.png', '1580633634.png', '1580633687.png',
    '1580633707.png', '1580633710.png', '1580633768.png', '1580633772.png', '1580633807.png',
    '1580633827.png', '1580633836.png', '1580633855.png', '1580633891.png', '1580633916.png',
    '1580633917.png', '1580633933.png', '1580633937.png', '1580633959.png', '1580633978.png',
    //'1580633982.png', '1580633993.png', '1580634027.png', '1580634039.png', '1580634072.png',
    //'1580634073.png', '1580643028.png', '1580643068.png', '1580643108.png', '1580643117.png',
    '1580643125.png', '1580643140.png', '1580643149.png', '1580643153.png', '1580643161.png',
    '1580643479.png', '1580643491.png', '1580643504.png', '1580643514.png', '1580643700.png',
    '1580643706.png', '1580643728.png', '1580643792.png', '1580643801.png', '1580643806.png',
    '1580643822.png', '1580643855.png', '1580643879.png', '1580643906.png', '1580643937.png',
    '1580643978.png', '1580643993.png', '1580644009.png', '1580644018.png', '1580644033.png',
    //'1580644054.png', '1580644066.png', '1580644134.png', '1580644147.png', '1580644160.png',
    //'1580644199.png', '1580644204.png', '1580644218.png', '1580644224.png', '1580644229.png',
    '1580644240.png', '1580644275.png', '1580644295.png', '1580644349.png', '1580670059.png',
    '1580670112.png', '1580670113.png', '1580670145.png', '1580670193.png', '1580670971.png',
    //'1580671001.png', '1580671026.png', '1580671059.png', '1580671129.png', '1580671198.png',
    '1580672348.png', '1580672536.png', '1580672551.png', '1580672605.png', '1580672606.png'
];
// Filter out elements from fileNames03 that exist in imageIds
file_names['03']  = file_names['03'].filter(function(fileName) {
    return !Hide03.includes(fileName); // Keep only elements not found in imageIds
});


