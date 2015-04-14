KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('checkit', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/checkit/1.1.1/']});