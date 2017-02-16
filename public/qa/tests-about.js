suite("tests of 'about...' page", function() {
    test("page should contain link a to the contact page ", function() {
        assert($("a[href='/contact']").length);
    });
});
